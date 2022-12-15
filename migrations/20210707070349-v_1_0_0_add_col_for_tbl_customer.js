'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_customer', 'birthday', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_customer', 'cafe24_created_date', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
    return await queryInterface.addColumn('tbl_customer', 'cafe24_last_login_date', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_customer', 'birthday');
    await queryInterface.removeColumn('tbl_customer', 'cafe24_created_date');
    return await queryInterface.removeColumn('tbl_customer', 'cafe24_last_login_date');
  }
};