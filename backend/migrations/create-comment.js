"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "Ùsers",
          key: "ìd",
        },
        onDelete: "CASCADE",
      },
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "Posts",
          key: "ìd",
        },
        onDelete: "CASCADE",
      },
      content: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Comments");
  },
};
