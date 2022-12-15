'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'email_text_color', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'email_link_color', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'email_button_color', {
      type: Sequelize.STRING,
    });
    return await queryInterface.addColumn('tbl_user', 'email_logo_image', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'email_text_color');
    await queryInterface.removeColumn('tbl_user', 'email_link_color');
    await queryInterface.removeColumn('tbl_user', 'email_button_color');
    return await queryInterface.removeColumn('tbl_user', 'email_logo_image');
  }
};
