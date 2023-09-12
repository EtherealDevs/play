"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Images", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      filename: {
        type: Sequelize.STRING,
      },
      mimetype: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.INTEGER,
      },
      path: {
        type: Sequelize.STRING,
      },
      CREATED_AT: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      UPDATED_AT: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize
      .query("SET FOREIGN_KEY_CHECKS = 0;")
      .then(() => {
        queryInterface.sequelize.query("DROP TABLE react_db.images;");
      })
      .then(() => {
        queryInterface.sequelize.query("SET foreign_key_checks = 1;");
      });
  },
};
