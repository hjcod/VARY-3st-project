'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_payment_history', 'reset_date', {
      type: Sequelize.BIGINT
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_payment_history', 'reset_date');
  }
};