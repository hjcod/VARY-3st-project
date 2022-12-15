'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_random_card', 'webpage_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_webpage',
        key: 'id'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_random_card', 'webpage_id');
  }
};