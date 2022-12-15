'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_campaign', 'additional_comment_request_text', {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('tbl_campaign', 'is_show_comment', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });

    await queryInterface.addColumn('tbl_auto_campaign', 'additional_comment_request_text', {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('tbl_auto_campaign', 'is_show_comment', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });

    await queryInterface.addColumn('tbl_webpage', 'additional_comment_request_text', {
      type: Sequelize.TEXT,
    });
    return await queryInterface.addColumn('tbl_webpage', 'is_show_comment', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_campaign', 'is_show_comment');
    await queryInterface.removeColumn('tbl_campaign', 'additional_comment_request_text');
    await queryInterface.removeColumn('tbl_auto_campaign', 'is_show_comment');
    await queryInterface.removeColumn('tbl_auto_campaign', 'additional_comment_request_text');
    await queryInterface.removeColumn('tbl_webpage', 'is_show_comment');
    return await queryInterface.removeColumn('tbl_webpage', 'additional_comment_request_text');
  }
};
