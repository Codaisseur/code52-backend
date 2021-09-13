"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Matias",
          password: "123",
          email: "matias@codaisseur.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "karla",
          password: "123",
          email: "karla@codaisseur.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "andre",
          password: "123",
          email: "andre@codaisseur.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
