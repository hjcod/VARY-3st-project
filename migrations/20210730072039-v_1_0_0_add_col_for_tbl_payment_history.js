'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_payment_history', 'parent_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_payment_history',
        key: 'id'
      },
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_payment_history', 'parent_id');
  }
};