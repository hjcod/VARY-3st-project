"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("tbl_cafe24_fields", "ip_address", {
      type: Sequelize.STRING,
    });
    return await queryInterface.changeColumn("tbl_cafe24_fields", "phone_number", {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("tbl_cafe24_fields", "ip_address", {
      type: Sequelize.INTEGER,
    });
    return await queryInterface.changeColumn("tbl_cafe24_fields", "phone_number", {
      type: Sequelize.INTEGER,
    });
  },
};
