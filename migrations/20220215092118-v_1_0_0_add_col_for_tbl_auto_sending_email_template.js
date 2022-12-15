'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_auto_sending_email_template', 'order', {
      type: Sequelize.INTEGER,
      defaultValue: 99999
    });
    return await queryInterface.addColumn('tbl_auto_sending_email_template', 'template', {
      type: Sequelize.JSONB,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_auto_sending_email_template', 'order');
    return await queryInterface.removeColumn('tbl_auto_sending_email_template', 'template');
  }
};
