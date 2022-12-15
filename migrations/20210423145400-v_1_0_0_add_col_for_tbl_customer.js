'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_customer', 'number_of_click_mail', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0
      }
    });
    return await queryInterface.addColumn('tbl_customer', 'number_of_open_mail', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_customer', 'number_of_click_mail');
    return await queryInterface.removeColumn('tbl_customer', 'number_of_open_mail');
  }
};
