'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_list_customers', 'form_json_content', {
      type: Sequelize.JSONB
    });
    return await queryInterface.addColumn('tbl_list_customers', 'complete_json_content', {
      type: Sequelize.JSONB
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_list_customers', 'form_json_content');
    return await queryInterface.removeColumn('tbl_list_customers', 'complete_json_content');
  }
};
