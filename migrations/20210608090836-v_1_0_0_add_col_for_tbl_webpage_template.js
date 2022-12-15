'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_webpage_template', 'webpage_template_category_id', {
      type: Sequelize.UUID,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_webpage_template', 'webpage_template_category_id');
  }
};
