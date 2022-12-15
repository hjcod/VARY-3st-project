'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_auto_campaign', 'is_category_none', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
    return await queryInterface.addColumn('tbl_auto_campaign', 'is_template', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_auto_campaign', 'is_category_none');
    return await queryInterface.removeColumn('tbl_auto_campaign', 'is_template');
  }
};
