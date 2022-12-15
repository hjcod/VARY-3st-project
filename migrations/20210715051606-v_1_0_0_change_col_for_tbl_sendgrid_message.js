"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("tbl_sendgrid_message", "campaign_id_foreign_idx")
    return await queryInterface.changeColumn("tbl_sendgrid_message", "campaign_id", {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_campaign',
        key: 'id'
      },
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("tbl_sendgrid_message", "campaign_id", {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_campaign',
        key: 'id'
      },
      allowNull: false
    });
  },
};
