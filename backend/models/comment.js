"use strict";
const { Sequelize, DataTypes, database } = require("./connexion");

const Comment = database.define(
  "Comment",
  {
    content: DataTypes.TEXT,
  },
  {
    Sequelize,
    modelName: "Comment",
  }
);

module.exports = Comment;
