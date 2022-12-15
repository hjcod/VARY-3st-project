'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'company_name', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'company_url', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'company_position', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'company_size', {
      type: Sequelize.INTEGER,
    });
    return await queryInterface.addColumn('tbl_user', 'company_industry', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'company_name');
    await queryInterface.removeColumn('tbl_user', 'company_url');
    await queryInterface.removeColumn('tbl_user', 'company_position');
    await queryInterface.removeColumn('tbl_user', 'company_size');
    return await queryInterface.removeColumn('tbl_user', 'company_industry');
  }
};
