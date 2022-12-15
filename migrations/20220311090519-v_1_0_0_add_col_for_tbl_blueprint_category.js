'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_blueprint_category', 'is_auto_campaign_template', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
    await queryInterface.changeColumn("tbl_blueprint_categories", "blueprint_id", {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_blueprint',
        key: 'id'
      },
      allowNull: true
    });
    return await queryInterface.addColumn('tbl_blueprint_categories', 'auto_campaign_template_id', {
      type: Sequelize.UUID,
        references: {
          model: 'tbl_auto_campaign',
          key: 'id'
        },
        allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_blueprint_category', 'is_auto_campaign_template');
    return await queryInterface.removeColumn('tbl_blueprint_categories', 'auto_campaign_template_id');
  }
};
