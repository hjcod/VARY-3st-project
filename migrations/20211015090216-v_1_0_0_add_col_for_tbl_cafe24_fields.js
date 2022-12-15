"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn("tbl_cafe24_fields", "age", {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.removeColumn("tbl_cafe24_fields", "age");
  },
};
