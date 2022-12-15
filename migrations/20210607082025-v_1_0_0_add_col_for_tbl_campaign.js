'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_campaign', 'backup_id', {
      type: Sequelize.STRING,
      // defaultValue: []
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_campaign', 'backup_id');
  }
};
