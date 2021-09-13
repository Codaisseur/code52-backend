"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          title: "Work list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Personal list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hobby list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
