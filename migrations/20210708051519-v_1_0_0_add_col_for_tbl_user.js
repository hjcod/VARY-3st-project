'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.addColumn('tbl_user', 'identity_card_number', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_user', 'identity_card_number');
  }
};