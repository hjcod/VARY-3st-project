'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_list_customers', 'updated_at_unix_timestamp', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_list_customers', 'updated_at_unix_timestamp');
  }
};
