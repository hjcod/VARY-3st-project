'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_static_webpage', 'webpage_dynamic_url_id', {
      type: Sequelize.UUID,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_static_webpage', 'webpage_dynamic_url_id');
  }
};
