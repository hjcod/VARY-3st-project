'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_list_customers', 'default_name', {
      type: Sequelize.STRING
    });
    return await queryInterface.addColumn('tbl_list_customers', 'default_email', {
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_list_customers', 'default_name');
    return await queryInterface.removeColumn('tbl_list_customers', 'default_email');

  }
};
