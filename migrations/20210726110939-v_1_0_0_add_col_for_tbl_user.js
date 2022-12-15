'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'send_issue_storage_to_user', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
    return await queryInterface.addColumn('tbl_user', 'send_issue_view_to_user', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'send_issue_storage_to_user');
    return await queryInterface.removeColumn('tbl_user', 'send_issue_view_to_user');
  }
};