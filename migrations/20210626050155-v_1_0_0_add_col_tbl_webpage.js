'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_webpage', 'is_active_deployment_limit_number', {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.removeColumn('tbl_webpage', 'url_list_customers_id');
    return await queryInterface.addColumn('tbl_webpage', 'is_active_deployment_limit_period', {
      type: Sequelize.BOOLEAN,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_webpage', 'is_active_deployment_limit_number');
    await queryInterface.addColumn('tbl_webpage', 'url_list_customers_id', {
      type: Sequelize.STRING,
    });
    return await queryInterface.removeColumn('tbl_webpage', 'is_active_deployment_limit_period');
  }
};
