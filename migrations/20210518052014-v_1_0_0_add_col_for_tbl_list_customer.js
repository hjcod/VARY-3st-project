'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_list_customers', 'number_of_receiver_is_subscriber', {
      type: Sequelize.INTEGER,
      validate: {
        min: 0
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_list_customers', 'number_of_receiver_is_subscriber');

  }
};
