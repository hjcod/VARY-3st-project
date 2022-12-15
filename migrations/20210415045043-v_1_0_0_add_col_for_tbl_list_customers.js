'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_campaign', 'shipment_success_list', {
      type: Sequelize.ARRAY({ type: Sequelize.STRING }),
      defaultValue: [],
    });
    await queryInterface.addColumn('tbl_campaign', 'open_list', {
      type: Sequelize.ARRAY({ type: Sequelize.STRING }),
      defaultValue: [],
    });
    await queryInterface.addColumn('tbl_campaign', 'click_list', {
      type: Sequelize.ARRAY({ type: Sequelize.STRING }),
      defaultValue: [],
    });
    await queryInterface.addColumn('tbl_campaign', 'spam_list', {
      type: Sequelize.ARRAY({ type: Sequelize.STRING }),
      defaultValue: [],
    });
    await queryInterface.addColumn('tbl_campaign', 'reject_list', {
      type: Sequelize.ARRAY({ type: Sequelize.STRING }),
      defaultValue: [],
    });
    return await queryInterface.addColumn('tbl_campaign', 'fail_list', {
      type: Sequelize.ARRAY({ type: Sequelize.STRING }),
      defaultValue: [],
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_campaign', 'shipment_success_list');
    await queryInterface.removeColumn('tbl_campaign', 'open_list');
    await queryInterface.removeColumn('tbl_campaign', 'click_list');
    await queryInterface.removeColumn('tbl_campaign', 'spam_list');
    await queryInterface.removeColumn('tbl_campaign', 'reject_list');
    return await queryInterface.removeColumn('tbl_campaign', 'fail_list');
  }
};
