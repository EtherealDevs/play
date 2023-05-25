'use strict';
const bcryptjs = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config({path: './../.env'})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    console.log(`Raw Password ${process.env.ADMIN_PASSWORD}`)
    const passHashed = await bcryptjs.hash(`${process.env.ADMIN_PASSWORD}`, 8)
    console.log(`Hashed Password ${passHashed}`)
    return queryInterface.bulkInsert('admins', [{
      username: 'admin',
      email: 'admin@gmail.com',
      password: passHashed,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('admins', null, {truncate: true});
  }
};
