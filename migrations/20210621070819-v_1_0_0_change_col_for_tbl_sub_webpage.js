"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("tbl_sub_webpage", "size", {
      type: Sequelize.DOUBLE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("tbl_sub_webpage", "size", {
      type: Sequelize.INTEGER,
    });
  },
};
