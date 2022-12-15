'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'maximum_webpage_storage', {
      type: Sequelize.BIGINT,
    });
    return await queryInterface.addColumn('tbl_user', 'current_webpage_storage', {
      type: Sequelize.BIGINT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'maximum_webpage_storage');
    return await queryInterface.removeColumn('tbl_user', 'current_webpage_storage');
  }
};
