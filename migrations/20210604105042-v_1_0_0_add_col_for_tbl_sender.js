'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_sender', 'max_number_of_email_per_month', {
      type: Sequelize.INTEGER,
      validate: {
        min: 0
      },
      defaultValue: 0
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_sender', 'max_number_of_email_per_month');
  }
};
