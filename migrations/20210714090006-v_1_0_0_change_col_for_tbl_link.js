"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("tbl_link", "campaign_id", {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_campaign',
        key: 'id'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("tbl_link", "campaign_id", {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_campaign',
        key: 'id'
      },
      allowNull: false
    });
  },
};
