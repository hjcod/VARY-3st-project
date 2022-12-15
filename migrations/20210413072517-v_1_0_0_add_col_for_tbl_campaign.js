'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_campaign', 'review', {
      type: Sequelize.STRING,
    });
    return await queryInterface.addColumn('tbl_campaign', 'list_customers_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_list_customers',
        key: 'id'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_campaign', 'review');
    return await queryInterface.removeColumn('tbl_campaign', 'list_customers_id');
  }
};
