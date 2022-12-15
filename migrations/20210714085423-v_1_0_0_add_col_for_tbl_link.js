'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_link', 'auto_campaign_id', {
      type: Sequelize.UUID,
        references: {
          model: 'tbl_auto_campaign',
          key: 'id'
        },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_link', 'auto_campaign_id');
  }
};