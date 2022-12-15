'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'number_of_webpage_view_excess', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      },
      defaultValue: 0
    });
    return await queryInterface.addColumn('tbl_user', 'number_of_mail_excess', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      },
      defaultValue: 0
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'number_of_webpage_view_excess');
    return await queryInterface.removeColumn('tbl_user', 'number_of_mail_excess');
  }
};