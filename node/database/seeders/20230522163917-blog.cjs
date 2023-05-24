/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('blogs', [{
      title: 'Caca',
      content: 'Cacoona',
      createdAt: new Date(),
      updatedAt: new Date(),
      ImageId: 1
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('blogs', null, { truncate: true })
  }
};

