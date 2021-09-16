"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("todoLists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });

    await queryInterface.addColumn("todoItems", "myListId", {
      type: Sequelize.INTEGER,
      references: {
        model: "todoLists",
        key: "id", // todoListId
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoLists", "userId");
    await queryInterface.removeColumn("todoItems", "myListId");
  },
};
