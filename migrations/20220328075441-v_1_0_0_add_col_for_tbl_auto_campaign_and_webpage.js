'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_auto_campaign', 'number_of_block', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    return await queryInterface.addColumn('tbl_webpage', 'number_of_block', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_block_feedback', 'auto_campaign_id');
    return await queryInterface.removeColumn('tbl_block_feedback', 'auto_campaign_id');
  }
};
