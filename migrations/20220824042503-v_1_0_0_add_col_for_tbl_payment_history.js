'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_payment_schedule', 'amout_of_storage', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0
      }
    });
    return await queryInterface.addColumn('tbl_payment_schedule', 'storage_add_on', {
      type: Sequelize.BIGINT,
      defaultValue: 209715200,
      validate: {
        min: 0
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_payment_schedule', 'storage_add_on');
  }
};
