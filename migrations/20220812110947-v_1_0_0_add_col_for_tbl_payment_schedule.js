'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_payment_schedule', 'schedule_time', {
      type: Sequelize.INTEGER,
      defaultValue:0
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_payment_schedule', 'schedule_time');
  }
};
