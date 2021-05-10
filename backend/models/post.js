"use strict";
const { Sequelize, DataTypes, database } = require("./connexion");

const Post = database.define(
  "Post",
  {
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    comments: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
  },
  {
    Sequelize,
    modelName: "Post",
  }
);

module.exports = Post;
