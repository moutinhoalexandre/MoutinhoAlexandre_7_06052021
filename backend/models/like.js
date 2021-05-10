"use strict";
const { Sequelize, DataTypes, database } = require("./connexion");

const Comment = database.define(
  "Like",
  {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
  },
  {
    Sequelize,
    modelName: "Like",
  }
);

module.exports = Comment;
