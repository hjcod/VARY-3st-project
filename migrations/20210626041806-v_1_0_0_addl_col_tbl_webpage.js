'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_webpage', 'url_quantity', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('tbl_webpage', 'url_list_customers_id', {
      type: Sequelize.STRING,
    });
    return await queryInterface.addColumn('tbl_webpage', 'url_field', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_webpage', 'url_quantity');
    await queryInterface.removeColumn('tbl_webpage', 'url_list_customers_id');
    return await queryInterface.removeColumn('tbl_webpage', 'url_field');
  }
};
