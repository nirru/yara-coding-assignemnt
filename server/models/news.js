import { Sequelize, DataTypes } from 'sequelize';
import config from '../config/config.json';

const sequelize = new Sequelize(config.development);

export const News = sequelize.define('News',
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    pubishDate: DataTypes.DATE });


News.sync();
