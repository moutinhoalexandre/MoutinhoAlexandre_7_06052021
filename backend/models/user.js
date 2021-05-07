'use strict';
const { Sequelize, DataTypes, database } = require('./connexion');

const User = database.define(
  'User',
  {
    username: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
    },
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    bio: DataTypes.STRING,
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
  },
  {
    Sequelize,
    modelName: 'User',
  }
);

module.exports = User;
