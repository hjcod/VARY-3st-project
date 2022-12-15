'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_list_customers', 'button_text', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_list_customers', 'content', {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('tbl_list_customers', 'show_content', {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('tbl_list_customers', 'subscription_explanation', {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('tbl_list_customers', 'subscription_title', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_list_customers', 'subscription_image', {
      type: Sequelize.STRING,
    });
    return await queryInterface.addColumn('tbl_list_customers', 'extra_fields', {
      type: Sequelize.JSONB,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_list_customers', 'button_text');
    await queryInterface.removeColumn('tbl_list_customers', 'content');
    await queryInterface.removeColumn('tbl_list_customers', 'show_content');
    await queryInterface.removeColumn('tbl_list_customers', 'subscription_explanation');
    await queryInterface.removeColumn('tbl_list_customers', 'subscription_title');
    await queryInterface.removeColumn('tbl_list_customers', 'subscription_image');
    return await queryInterface.removeColumn('tbl_list_customers', 'extra_fields');
  }
};
