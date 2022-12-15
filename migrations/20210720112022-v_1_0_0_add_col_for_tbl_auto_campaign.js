'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_auto_campaign', 'sending_time', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_auto_campaign', 'sending_time');
  }
};