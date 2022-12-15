'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'maximum_email_sent_number', {
      type: Sequelize.INTEGER,
      defaultValue: 5000,
    });
    return await queryInterface.addColumn('tbl_user', 'current_email_sent_number', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'maximum_email_sent_number');
    return await queryInterface.removeColumn('tbl_user', 'current_email_sent_number');
  }
};