'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'processing_auto_campaigns_number', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
    await queryInterface.addColumn('tbl_user', 'preparing_auto_campaigns_number', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
    return await queryInterface.addColumn('tbl_user', 'stopped_auto_campaigns_number', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'processing_auto_campaigns_number');
    await queryInterface.removeColumn('tbl_user', 'preparing_auto_campaigns_number');
    return await queryInterface.removeColumn('tbl_user', 'stopped_auto_campaigns_number');

  }
};
