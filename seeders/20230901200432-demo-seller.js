'use strict';
const { faker } = require('@faker-js/faker')
const bcrypt = require('bcrypt');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    let mockedSellers = []

    Array.from({ length : 10 }).forEach(element => {

      mockedSellers.push({
        email: faker.internet.email(),
        password: bcrypt.hashSync('12caroline12!', 10)
      })

    });

    await queryInterface.bulkInsert('sellers', mockedSellers, {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('sellers', null, {})

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
