"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          title: "Go to the gym",
          deadline: "tomorrow",
          myListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Learn to dance",
          deadline: "ASAP",
          myListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Go to Thailand",
          deadline: "Next year",
          myListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
