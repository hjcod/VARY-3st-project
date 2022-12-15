'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_auto_campaign', 'number_of_sending_hours', {
      type: Sequelize.ARRAY({ type: Sequelize.INTEGER }),
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_auto_campaign', 'number_of_sending_hours');
  }
};