'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_auto_campaign', 'sending_status', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('tbl_auto_campaign', 'delay_hours', {
      type: Sequelize.BIGINT
    });
    await queryInterface.addColumn('tbl_auto_campaign', 'end_date', {
      type: Sequelize.BIGINT
    });
    return await queryInterface.addColumn('tbl_auto_campaign', 'start_date', {
      type: Sequelize.BIGINT
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_auto_campaign', 'sending_status');
    await queryInterface.removeColumn('tbl_auto_campaign', 'delay_hours');
    await queryInterface.removeColumn('tbl_auto_campaign', 'start_date');
    return await queryInterface.removeColumn('tbl_auto_campaign', 'end_date');
  }
};