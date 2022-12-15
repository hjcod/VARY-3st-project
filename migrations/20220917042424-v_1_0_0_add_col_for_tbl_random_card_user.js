'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_random_card_user', 'random_card_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_random_card',
        key: 'id'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_random_card_user', 'random_card_id');
  }
};