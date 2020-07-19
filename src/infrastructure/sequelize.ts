import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('example', 'example', 'example', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});
