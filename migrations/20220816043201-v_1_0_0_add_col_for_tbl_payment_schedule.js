'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_payment_schedule', 'is_back_to_free', {
      type: Sequelize.BOOLEAN,
      defaultValue:false
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_payment_schedule', 'is_back_to_free');
  }
};
