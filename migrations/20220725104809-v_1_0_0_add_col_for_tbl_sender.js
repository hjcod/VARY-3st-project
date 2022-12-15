'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_sender', 'sengrid_dkim', {
      type: Sequelize.JSONB,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_sender', 'sengrid_dkim');
  }
};
