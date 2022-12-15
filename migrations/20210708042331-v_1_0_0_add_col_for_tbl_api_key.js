'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.addColumn('tbl_api_key', 'index', {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_api_key', 'index');
  }
};