'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'cafe24_access_token', {
      type: Sequelize.STRING,
    });
    return await queryInterface.addColumn('tbl_user', 'cafe24_refresh_token', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'cafe24_access_token');
    return await queryInterface.removeColumn('tbl_user', 'cafe24_refresh_token');
  }
};
