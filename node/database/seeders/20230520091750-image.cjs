"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("images", [
      {
        filename: "logo.png",
        mimetype: "image/png",
        size: "269221",
        path: "public/img/logo.png",
        CREATED_AT: new Date(),
        UPDATED_AT: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Results will be an empty array and metadata will contain the number of affected rows.
    return queryInterface.sequelize
      .query("SET FOREIGN_KEY_CHECKS = 0;")
      .then(() => {
        queryInterface.sequelize.query("TRUNCATE TABLE react_db.images;");
      })
      .then(() => {
        queryInterface.sequelize.query("SET foreign_key_checks = 1;");
      });
  },
};
