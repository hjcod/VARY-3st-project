'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_block_feedback', 'webpage_id', {
      type: Sequelize.UUID,
        references: {
          model: 'tbl_webpage',
          key: 'id'
        }
    });
    return await queryInterface.addColumn('tbl_block_feedback', 'auto_campaign_id', {
      type: Sequelize.UUID,
        references: {
          model: 'tbl_auto_campaign',
          key: 'id'
        }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_block_feedback', 'auto_campaign_id');
    return await queryInterface.removeColumn('tbl_block_feedback', 'auto_campaign_id');
  }
};
