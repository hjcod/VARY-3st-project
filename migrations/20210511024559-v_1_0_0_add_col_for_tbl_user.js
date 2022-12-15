'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'sent_campaigns_number', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
    await queryInterface.addColumn('tbl_user', 'reservation_campaigns_number', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
    await queryInterface.addColumn('tbl_user', 'inputing_campaigns_number', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
    await queryInterface.addColumn('tbl_user', 'preparing_campaigns_number', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
    return await queryInterface.addColumn('tbl_user', 'auto_campaigns_number', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'sent_campaigns_number');
    await queryInterface.removeColumn('tbl_user', 'reservation_campaigns_number');
    await queryInterface.removeColumn('tbl_user', 'inputing_campaigns_number');
    await queryInterface.removeColumn('tbl_user', 'preparing_campaigns_number');
    return await queryInterface.removeColumn('tbl_user', 'auto_campaigns_number');

  }
};
