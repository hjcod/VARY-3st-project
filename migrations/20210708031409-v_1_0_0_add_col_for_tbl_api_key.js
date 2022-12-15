'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.addColumn('tbl_api_key', 'user_id', {
      type: Sequelize.UUID,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_api_key', 'user_id');
  }
};