'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'preparing_webpages_number', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('tbl_user', 'stopped_webpages_number', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('tbl_user', 'running_webpages_number', {
      type: Sequelize.INTEGER,
    });
    return await queryInterface.addColumn('tbl_user', 'updating_webpages_number', {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'preparing_webpages_number');
    await queryInterface.removeColumn('tbl_user', 'stopped_webpages_number');
    await queryInterface.removeColumn('tbl_user', 'running_webpages_number');
    return await queryInterface.removeColumn('tbl_user', 'updating_webpages_number');
  }
};
