"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        username: "admin",
        email: "admin@gmail.com",
        password:
          "$2b$10$ap0Gln0C6UXWuIKWCMOCk.t/tlA.u.zmreEiDD4q3BjT/31SpmK0a",
        is_admin: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user",
        email: "user@gmail.com",
        password:
          "$2b$10$i249aDbOkD/9268d1kwqx.je2CYo9I1y2eYRHX9oT0JajK3JGJGXC",
        is_admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
