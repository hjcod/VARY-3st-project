'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_block_feedback', 'star_data', {
      type: Sequelize.JSONB
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_block_feedback', 'star_data');
  }
};
