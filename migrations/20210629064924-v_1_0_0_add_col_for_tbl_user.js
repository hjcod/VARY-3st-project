'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_user', 'payment_info_business_license', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'payment_info_address', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'payment_info_email', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'payment_info_phone', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'payment_info_name', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'credit_card_expire_date', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'credit_card_last_4_digits', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tbl_user', 'maximum_webpage_view', {
      type: Sequelize.INTEGER,
      defaultValue: 300
    });
    await queryInterface.addColumn('tbl_user', 'current_webpage_view', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    await queryInterface.addColumn('tbl_user', 'reset_date', {
      type: Sequelize.BIGINT,
    });
    await queryInterface.addColumn('tbl_user', 'webpage_dynamic_url_plan', {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn('tbl_user', 'webpage_additional_storage_plan_purchased_storage', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('tbl_user', 'webpage_plan', {
      type: Sequelize.STRING,
    });
    return await queryInterface.addColumn('tbl_user', 'email_plan', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_user', 'payment_info_business_license');
    await queryInterface.removeColumn('tbl_user', 'payment_info_address');
    await queryInterface.removeColumn('tbl_user', 'payment_info_email');
    await queryInterface.removeColumn('tbl_user', 'payment_info_phone');
    await queryInterface.removeColumn('tbl_user', 'payment_info_name');
    await queryInterface.removeColumn('tbl_user', 'credit_card_expire_date');
    await queryInterface.removeColumn('tbl_user', 'credit_card_last_4_digits');
    await queryInterface.removeColumn('tbl_user', 'maximum_webpage_view');
    await queryInterface.removeColumn('tbl_user', 'current_webpage_view');
    await queryInterface.removeColumn('tbl_user', 'reset_date');
    await queryInterface.removeColumn('tbl_user', 'webpage_dynamic_url_plan');
    await queryInterface.removeColumn('tbl_user', 'webpage_additional_storage_plan_purchased_storage');
    await queryInterface.removeColumn('tbl_user', 'webpage_plan');
    return await queryInterface.removeColumn('tbl_user', 'email_plan');
  }
};
