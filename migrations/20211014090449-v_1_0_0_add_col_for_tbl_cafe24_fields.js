"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("tbl_auto_campaign", "conditions", {
      type: Sequelize.JSONB,
    });
    await queryInterface.addColumn("tbl_auto_campaign", "operation_method", {
      type: Sequelize.JSONB,
    });
    await queryInterface.changeColumn("tbl_cafe24_fields", "zipcode", {
      type: Sequelize.STRING,
    });
    return await queryInterface.addColumn("tbl_cafe24_fields", "created_date", {
      type: Sequelize.BIGINT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("tbl_auto_campaign", "conditions");
    await queryInterface.removeColumn("tbl_auto_campaign", "operation_method");
    await queryInterface.changeColumn("tbl_cafe24_fields", "zipcode", {
      type: Sequelize.INTEGER,
    });
    return await queryInterface.removeColumn("tbl_cafe24_fields", "phone_number");
  },
};
