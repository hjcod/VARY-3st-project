'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_campaign', 'content', {
      type: Sequelize.JSON,
    });
    return await queryInterface.addColumn('tbl_campaign', 'is_advertisement_enabled', {
      type: Sequelize.BOOLEAN,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_campaign', 'content');
    return await queryInterface.removeColumn('tbl_campaign', 'is_advertisement_enabled');
  }
};
